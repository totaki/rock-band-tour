/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        // console.log(size)
        // backgroundLayer = new cc.LayerColor();
        // // backgroundLayer.set(size.width, size.height);
        // backgroundLayer.setContentSize(size.width, size.height);
        // backgroundLayer.setColor(cc.color(88, 88, 88));
        // this.addChild(backgroundLayer);
        // backgroundLayer.setPosition(cc.p(0, 0));
        // this.sprite = new cc.Sprite(res.HelloWorld_png);
        // this.sprite.attr({
        //     x: size.width / 2,
        //     y: size.height / 2
        // });
        // this.addChild(this.sprite, 0);
        //
        // var label = new cc.LabelTTF("Hello World ololololo", "Arial", 38);
        // label.x = size.width / 2;
        // label.y = size.height / 2;
        // label.setColor(cc.color(255, 255, 255))
        // this.addChild(label)
        //
        // /////////////////////////////
        // // 2. add a menu item with "X" image, which is clicked to quit the program
        // //    you may modify it.
        // // ask the window size
        //
        // /////////////////////////////
        // // 3. add your codes below...
        // // add a label shows "Hello World"
        // // create and initialize a label
        // var list = new ccui.ListView()
        // list.setDirection(ccui.ScrollView.DIR_VERTICAL)
        //
        // list.setBounceEnabled(true)
        // list.setContentSize(cc.size(1200, 200))
        // list.setPosition(cc.p(size.width/2, size.height/2))
        // // position the label on the center of the screen
        // // add the label as a child to this layer
        // console.log(list.x, list.y)
        //
        // this.addChild(list);
        //
        // for (var i=0; i < 10; i ++) {
        //     var label = cc.LabelTTF('Ololol -> ' + i, "Arial", 38);
        //     list.setPosition(cc.p(size.width/2 + i*10, size.height/2 + i*10))
        //     // console.log(label)
        //     // list.pushBackCustomItem(label)
        //
        //     this.addChild(label)
        // }


        // add "HelloWorld" splash screen"
        var listView = new ccui.ListView();
        listView.setDirection(ccui.ScrollView.DIR_VERTICAL)
        listView.setTouchEnabled(true)
        listView.setBounceEnabled(true)
        listView.setBackGroundImage(res.HelloWorld_png)
        listView.setContentSize(cc.size(200, 400))
        listView.setAnchorPoint(cc.p(0, 1))
        listView.setPosition(cc.p(0, size.height))
        this.addChild(listView)

        for (var i = 1; i < 5; i++) {
            var btn = new ccui.Button()
            btn.setName('TextButton')
            btn.setTouchEnabled(true)
            btn.loadTextures(res.HelloWorld_png, res.HelloWorld_png, "")
            listView.pushBackCustomItem(btn)
        }


        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

