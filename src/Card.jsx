import React from 'react'

function Card({ card, id, DeleteCard, completed, handleCompletionChange, Edit }) {




    return (
        <>

            <div className='col-3'>
                <div class="card text-center" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <p></p>
                        <h5 class="card-title"><b>To Do : </b>{card.name} </h5>
                        <p class="card-text"><b>Description :</b> {card.description} </p>
                        <select id="card-status" name="card-status" value={completed} onChange={(e) => handleCompletionChange(id, e.target.value)} className='card-status completion'
                            style={{

                                backgroundColor:
                                    completed === 'Completed'
                                        ? 'green'
                                        : 'red',
                            }}>
                            <option value="Not Completed" className='not-completed' selected style={{ backgroundColor: "red" }} >Not Completed</option>
                            <option value="Completed" style={{ backgroundColor: "green" }}>Completed</option>
                        </select>
                    </div>
                    <div className='row d-flex justify-content-center'>

                        <div className='col'>
                            <button type='button' className='btn btn-warning' onClick={() => Edit(id)}>Edit</button>

                        </div>
                        <div className='col'>
                            <button type='button' className='btn btn-danger' onClick={() => DeleteCard(id)}>Delete</button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Card