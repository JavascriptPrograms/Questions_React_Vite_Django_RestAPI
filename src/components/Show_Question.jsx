import React, { useEffect, useState } from 'react';


const Show_Question = () => {
    const [ShowModel , setShowModel] = useState(false);
    const [questionId, setQuestionId] = useState({
        topic: "",
        question_text: "",
        answer_text: ""
    });
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5555/questions/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestion(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
    },[])

    const deleteItem = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if (!confirmed) return;
        fetch(`http://localhost:5555/questions/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(`Item ${id} deleted successfully`);
            setQuestion(question.filter(item => item.id !== id));
        })
    }

    const editItems = (item) => {
        // console.log(id);
        setQuestionId(item)
        setShowModel(true);   
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5555/questions/${questionId.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(questionId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setShowModel(false);
            setQuestionId({
                topic: "",
                question_text: "",
                answer_text: ""
            });
            setQuestion(question.map(item => item.id === questionId.id ? data : item));
            alert("Updated Successfully")
        })
    }

    return(
        <div className="container-fluid mt-5"> 
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr className="table-dark text-center">
                                <th>id</th>
                                <th>Topic</th>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                question.map((item) => {
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.topic}</td>
                                            <td>{item.question_text}</td>
                                            <td>{item.answer_text}</td>
                                            <td><button className="btn btn-success btn-sm" onClick={()=> editItems(item)}>Edit</button></td>
                                            <td><button className="btn btn-danger btn-sm" onClick={() => deleteItem(item.id)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-3"></div>
            </div>
            {ShowModel && (
                <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'block'}}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Question</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={() => setShowModel(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form action="" method='POST'>
                                    <input type="text" name='topic' value={questionId.topic} onChange={(e) => setQuestionId({...questionId, topic: e.target.value})} placeholder='Topic' className='form-control' /><br />
                                    <input type="text" name='question_text' value={questionId.question_text} onChange={(e) => setQuestionId({...questionId, question_text: e.target.value})} placeholder='Question' className='form-control' /><br />
                                    <input type="text" name='answer_text' value={questionId.answer_text} onChange={(e) => setQuestionId({...questionId, answer_text: e.target.value})} placeholder='Answer' className='form-control' /><br />
                                    <button type='submit' className='btn btn-primary btn-sm w-100' onClick={handleUpdate}>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    )
}
export default Show_Question;