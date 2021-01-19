export {placeStars as default}
    function placeStars() {
        $(document).ready(function () {
            let el = $("div.t396__filter[data-artboard-recid='267972904']");
            let [a,b] = [new Image(), new Image()];

            const getCoords = () => {
                return [el.width(), el.height() / 2];
            }

            const setPos = () => {
                $('#left').empty();
                a.id = "left";
                b.id = "right";
                a.src = './img/Arrow1.svg';
                b.src = './img/Arrow2.svg';
                [a.style.zIndex, b.style.zIndex] = ['999','999'];
                [a.style.position,b.style.position] = ['absolute', 'absolute'];
                a.style.left = getCoords()[0] / 10 + 'px';
                a.style.filter = "invert(6%) sepia(60%) saturate(23%) hue-rotate(345deg) brightness(93%) contrast(78%)";
                b.style.filter = "invert(6%) sepia(60%) saturate(23%) hue-rotate(345deg) brightness(93%) contrast(78%)";
                a.style.top = getCoords()[1] + 'px';
                b.style.left = getCoords()[0] * 0.9 + 'px';
                b.style.top = getCoords()[1] + 'px';
                console.log(`W: ${getCoords()[0]} Y: ${getCoords()[1]}`)
                a.addEventListener('mouseover', ev => {
                    ev.target.style.filter = "invert(0%) sepia(4%) saturate(0%) hue-rotate(17deg) brightness(95%) contrast(102%)";
                })
                a.addEventListener('mouseleave', ev => {
                    ev.target.style.filter = "invert(6%) sepia(60%) saturate(23%) hue-rotate(345deg) brightness(93%) contrast(78%)";
                })
                b.addEventListener('mouseover', ev => {
                    ev.target.style.filter = "invert(0%) sepia(4%) saturate(0%) hue-rotate(17deg) brightness(95%) contrast(102%)";
                })
                b.addEventListener('mouseleave', ev => {
                    ev.target.style.filter = "invert(6%) sepia(60%) saturate(23%) hue-rotate(345deg) brightness(93%) contrast(78%)";
                })


            }


            el.append(a);
            el.append(b);
            setPos();


            window.onresize = setPos;

        })
    }