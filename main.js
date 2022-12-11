// const generatedContent = document.getElementById('body')

function mainPageContent() {
    const renderMainPageContent =
        `
            <main id="main">
                <a href="https://github.com/Hacking-NASSA-with-HTML/javascript-notebook" target="_blank"><img width="149"
                        height="149" src="./forkme_left_red.png" style="position: fixed; top:0; left:0" alt="Fork me on GitHub">
                </a>
                <article class="article">
                    <div class="article--header">
                        <h2>How to deploy a piece of code as text on site:</h2>
                    </div>
                    <div class="article--headline">
                        <p>see results in the console also</p>
                        <p>the code is generated by JavaScript</p>
                        <p>HTML code:</p>
                    </div>
                    <div class="highlight--piece--of--code">
                        <pre>
                            <code>
                                &lt;div class="highlight--piece--of--code"&gt;
                                    &lt;pre&gt;
                                        &lt;code&gt;
                                ****************************** Your code here *******************************************************************
                                        &lt;/code&gt;
                                    &lt;/pre&gt;
                                &lt;/div&gt;
                            </code>
                        </pre>
                    </div>
                    <p>CSS code:</p>
                    <div class="highlight--piece--of--code">
                        <pre>
                            <code>
                                .highlight--piece--of--code {
                                background-color: #08090a;
                                color: #f8f8f3;
                                border-radius: 5px;
                                overflow-x: auto;
                                }
                            </code>
                        </pre>
                    </div>
                </article>
                <article class="article">
                    <div class="article--header">
                        <h2>Zhan Zhuridov's Observer. Initial variant:</h2>
                    </div>
                    <div class="article--headline">
                        <p>The second variant is in my GHgists:</p>
                        <p><a href="https://gist.github.com/Hacking-NASSA-with-HTML/60367e3fbeb7140a6983620cffc6a1f2"
                                target="_blank">https://gist.github.com/Hacking-NASSA-with-HTML/60367e3fbeb7140a6983620cffc6a1f2</a>
                        </p>
                    </div>
                    <div class="highlight--piece--of--code">
                        <pre>
                            <code>
                                class Observer{
                                    constructor(){
                                        this.listeners = [];
                                    }
                                    addListener(name, callback){
                                        let id = {};
                                        this.listeners.push({id, name, callback});
                                        return id;
                                    }
                                    addOnceListener(name, callback){
                                        let id = {};
                                        this.listeners.push({id, name, callback:()=>{
                                            callback();
                                            this.removeListener(id);
                                            }
                                        });
                                        return id;
                                    }
                                    removeListener(id){
                                        this.listeners = this.listeners.filter(it=>it.id!=id);
                                    }
                                    dispatch(name){
                                        this.listeners.filter(it=>it.name==name).forEach(it=>it.callback());
                                    }
                                }
                            </code>
                        </pre>
                    </div>
                </article>
            </main>
        `
    return renderMainPageContent
}

document.body.insertAdjacentHTML("afterend", mainPageContent())

// .map with arrow function
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
)
console.log(upperizedNames)

// .filter with ordinary and arrow functions
const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function (name) {
    return name.length > 6;
});

const longNamesArrow = names.filter(name => name.length > 6)
console.log(longNames)
console.log(longNamesArrow)

// example of arrow .map()
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    square => square * square
)

console.log(...squares);

// default function parameters:
function hello(name = 'Visitor', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
}

console.log(hello()); // Welcome Visitor!
console.log(hello('Nikky')); // Welcome Nikky!
console.log(hello('Jennifer', 'Howdy')); // Howdy Jennifer!

// one more example of default function parameters:
function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}
console.log(houseDescriptor(['green']))
console.log(houseDescriptor(['green', ['white', 'gray', 'pink']]))
