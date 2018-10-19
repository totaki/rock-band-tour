import os
import json
import argparse
import telegram

BASE_LINK = 'https://github.com/totaki/rock-band-tour/releases/download/%s/rockbandtour-%s-debug.apk'
API_KEY = os.environ.get('RBT_TOKEN', '')

def get_subscribers():
    s = os.environ.get('RBT_SUBSCRIBERS', None)
    if s is None:
        return []
    else:
        return [int(i) for i in s.split(',')]

def main(version):
    bot = telegram.Bot(token=API_KEY)
    with open('update_message.tpl') as f:
        template = f.read()
    
    with open('release_notes.json') as f:
        release_notes = json.load(f)
    
    release_notes_string = '\n'.join([
        ' - %s' % i
        for i in release_notes.get(version, ['Bugfixes and improvments'])
    ])
    rendered_template = template.format(
        version=version,
        release_notes=release_notes_string,
        link=BASE_LINK % (version, version)
    )
    subscribers = get_subscribers()
    for s in subscribers:
        bot.send_message(s, rendered_template, parse_mode='Markdown')


if __name__ == '__main__':
    parser = argparse.ArgumentParser('Send telegram notification')
    parser.add_argument('--version', type=str, required=True)
    args = parser.parse_args()
    main(args.version)
