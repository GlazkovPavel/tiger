import "./Editor.css";
import React from "react";

export function Editor() {
    const [search, setSearch] = React.useState('');
    const [arr, setArr] = React.useState(['']);
    const [text, setText] = React.useState('');

    function handleSearchChange(e: any ) {

        function color() {
            return 'rgb(' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ')';
        }

        setSearch( (e.target.value)
            //.replace(/./gi, `<span id="output" style="color: ${color()}" class="output" >$&</span>`)
            .replace(/\n/g, '<br/>'));
        console.log((e.target.value)
            .replace(/./gi, '""')
            .replace(/\n/g, '<br/>'));

        //search.split(' ')

        //setText(search.replace(/./gi, `<span id="output" style="color: ${color()}" class="output" >$&</span>`))

        const t = search.split('')
        t.forEach((value) => {
            return  console.log(value)
        })

        console.log()

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

            <div   dangerouslySetInnerHTML={createMarkup(text)}/>

        </div>
    )
}
