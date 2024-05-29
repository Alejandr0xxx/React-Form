
function CreateForm(){

        const [name, setName] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [text, setText] = React.useState('');

        const handleNameChange = event =>{
            setName(event.target.value)
        }
        const handleEmailChange = event =>{
            setEmail(event.target.value)
        }
        const handleTextChange = event =>{
            setText(event.target.value)
        }

        const onSubmit = event => {
            alert(`Usuario: ${name}\nEmail: ${email}\nText: ${text} `)
        }
    return(
        <div className="form-container">
                <h1>Form</h1>
                <form method="GET" className="form" onSubmit={onSubmit} >
                <label htmlFor="name" className="form-label">
                    Name:
                </label>
                <input 
                required type="text" 
                name="name" id="name" 
                className="input-info" 
                value={name} 
                onChange={handleNameChange}/>
                <label htmlFor="email" 
                className="form-label">
                    Email:
                </label>
                <input required type="email" 
                name="email" id="email" 
                className="input-info" 
                value={email} 
                onChange={handleEmailChange}/>
                <label htmlFor="text" className="form-label">
                    Text:
                </label>
                <textarea 
                required name="text" 
                id="text" 
                cols="45" 
                rows="4" 
                className="input-text" 
                value={text} 
                onChange={handleTextChange}
                ></textarea>
                <button className="input-button" type="submit">Send</button>
                </form>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CreateForm/>)