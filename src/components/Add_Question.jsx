import React , {useState} from 'react';


const Add_Question = () => {
    const [topic, setTopic] = useState('');
    const [question_text, setQuestion] = useState('');
    const [answer_text, setAnswer] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault();
        const data = {topic, question_text, answer_text};
        // console.log(data);
        fetch('http://localhost:5555/questions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            
        })
        .then((res) => res.json()) 
        console.log('Item created:', data);
        alert('Item created successfully');
        setTopic('');
        setQuestion('');
        setAnswer('');
        // window.location.reload(false);
        // window.location.href = '/show_question';   
     }

    return(
        <div className="container-fluid mt-5">
            <div className='row'>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <form method='post' onSubmit={handleSubmit}>  
                    <div className="mb-3 mt-3">
                        <label htmlFor="topic" className="form-label">Topic:</label>
                        <input type="text" className="form-control" id="topic" value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="Enter Topic" name="topic"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="question" className="form-label">Question:</label>
                        <input type="text" className="form-control" id="question" value={question_text} onChange={(e)=>setQuestion(e.target.value)} placeholder="Enter Question" name="question"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="answer" className="form-label">Answer:</label>
                        <input type="text" className="form-control" id="answer" value={answer_text} onChange={(e)=>setAnswer(e.target.value)} placeholder="Enter Answer" name="answer"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <button type="submit" className="btn btn-primary mb-5 w-100">Add Question</button>
                    </div>
                </form>
                </div>
                <div className='col-ms-4'></div>
            </div>
            
        </div>
    )
}

export default Add_Question;