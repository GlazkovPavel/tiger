import "./Editor.css";
import React from "react";

export function Editor() {
    const [search, setSearch] = React.useState('');

    function handleSearchChange(e: any) {

        function color() {
            return 'rgb(' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ')';
        }

        setSearch( (e.nativeEvent.data)
            .replace(/./gi, `<span id="output" style="color: ${color()}" class="output" >$&</span>`)
            .replace(/\n/g, '<br/>'));
        console.log((e.nativeEvent.data)
            .replace(/./gi, `<span id="output" style="color: ${color()}" class="output" >$&</span>`)
            .replace(/\n/g, '<br/>'));


    }
    // function red() {
    //     let ttt =  'color: rgb(' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ')';
    //     const span = document.getElementById(".output")!;
    //     span.style.color = ttt;
    // }

    function createMarkup(text: string) {
        return {__html: text};
    }


    return(
        <div className="editor">
            <h2>Введите текст</h2>

            <p><strong>Tip:</strong> Введите текст:</p>

            <form>
                <textarea
                    id="textarea"
                    placeholder=" Введите текст:"
                    onChange={handleSearchChange}

                    className="textarea" />
            </form>

            <div   dangerouslySetInnerHTML={createMarkup(search)}/>

        </div>
    )
}
