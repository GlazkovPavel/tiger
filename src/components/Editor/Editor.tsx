import "./Editor.css";
import React from "react";

export function Editor() {
    const [search, setSearch] = React.useState('');
    //const [arr, setArr] = React.useState(['']);
    //const [text, setText] = React.useState('');

    function handleSearchChange(e: any ) {

        function color() {
            return 'rgb(' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ')';
        }

        const value = e.nativeEvent.data
            // .replace(/./gi, `<span id="output" style="color: ${color()}" class="output" >$&</span>`)
            // .replace(/\n/g, '<br/>')


        if(!!value) {
            setSearch(value
                .replace(/./gi, `<span id="output" style="color: ${color()}" class="output" >$&</span>`)
                .replace(/\n/g, '<br/>'))
        } else {
            return setSearch('<br/>');
        }

        console.log(search)

        const result = document.querySelector('.result');

        //result?.innerHTML = search



    }



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

            <div className="result" />
        </div>
    )
}
