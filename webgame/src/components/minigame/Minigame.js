import React, { Component } from 'react';
import * as PIXI from "pixi.js";
import {eventResult} from "../../controller";
import connect from "react-redux/es/connect/connect";


class Minigame extends Component {

    componentDidMount(){
        const spriteImage = '/assets/images/sprite.png';
        const bottleImage = '/assets/images/bottle.png';
        const backImage = '/assets/images/stage.png';
        const lvlIncrementTime = 5000;
        const scaleSpeed = 0.005;
        const maxScale = 1.1;
        const roundTime = 5000;

        const state = {
            "scores": 0,
            "sprites": [],
            "intervals": []
        };

        const app = new PIXI.Application(640, 360, { transparent: false });

        document.getElementById('game').appendChild(app.view);

        const scoreText = new PIXI.Text('Очки: 0');
        scoreText.style = new PIXI.TextStyle({
            fill: 0xffffff
        });

        const background = PIXI.Sprite.fromImage(backImage);

        background.anchor.x = 0;
        background.anchor.y = 0;

        background.position.x = 0;
        background.position.y = 0;

        app.stage.addChild(background);
        app.stage.addChild(scoreText);


        const setScore = (value, color = false) => {
            scoreText.setText("Score: " + value)
        };

        // Scale mode for all textures, will retain pixelation
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        function onSpriteClick (e) {
            state.scores += 10;
            e.target.visible = false;
            // scoreText.tint = 0x00ac00;
            // e.target.destroy({texture: true})
        }

        function onBottleClick (e) {
            state.scores -= 10;
            e.target.visible = false;
            // scoreText.tint = 0xac0000;
            // e.target.destroy({texture: true})
        }
        function sptiteFactopry(img, handler, tint = 0xFFFFFF) {

            const sprite = PIXI.Sprite.fromImage(img);

            // Set the initial position
            sprite.anchor.set(0.5);
            sprite.x = app.screen.width * (1 - Math.random());
            sprite.y = app.screen.height * (1 - Math.random());
            sprite.scale.x = 0.1;
            sprite.scale.y = 0.1;
            sprite.rotation = Math.random();
            sprite.tint = tint;

            // Opt-in to interactivity
            sprite.interactive = true;
            sprite.buttonMode = true;

            // Pointers normalize touch and mouse
            sprite.on('pointerdown', handler);

            // Alternatively, use the mouse & touch events:
            // sprite.on('click', onClick); // mouse-only
            // sprite.on('tap', onClick); // touch-only

            app.stage.addChild(sprite);
            state.sprites.push(sprite)
        }

        app.ticker.add(function () {
            state.sprites.forEach(function(sprite, i, arr)
            {
                sprite.scale.x += scaleSpeed;
                sprite.scale.y += scaleSpeed;
                if (sprite.scale.x >= maxScale) {
                    sprite.visible = false;
                    // sprite.destroy({texture: true})
                }
            });
            setScore(state.scores)
        });

        function produceSprites(count, sprite, handler, tint){
            for (var i = 0; i < count; i++) {
                sptiteFactopry(sprite, handler, tint)
            }
        }

        function incrementLevel(){
            state.intervals.push(setInterval(produceSprites, 1500, 1, spriteImage, onSpriteClick));
            state.intervals.push(setInterval(produceSprites, 2000, 1, bottleImage, onBottleClick, 0xac0000));
        }

        const stopGame = () => {
            state.sprites.forEach(function(sprite, i, arr)
            {
                sprite.visible = false;
            });

            state.intervals.forEach(function(inteval, i, arr)
            {
                clearInterval(inteval);
            });
            app.stop();
            this.props.eventResult(state.scores)
        };

        incrementLevel();
        setInterval(incrementLevel, lvlIncrementTime);
        setTimeout(stopGame, roundTime)
    }

    render() {
        return (
            <div id="game">
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        eventResult: (i) => dispatch(eventResult(i)),
    };
}

export default connect(null, mapDispatchToProps)(Minigame);
