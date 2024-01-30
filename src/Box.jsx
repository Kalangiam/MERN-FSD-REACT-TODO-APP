import React from 'react'
import { useState } from 'react';

function Box({ EditCard, Edit, Update, NameChange, DisplayName, NameInput, DescriptionInput, DescriptionChange, overallStatusFilter, setOverallStatusFilter, newTaskName, setnewTaskName, newDescriptionName, setnewDescriptionName }) {


    return (

        <div className='container-fluid form-container'>
            <form className='form-control'>
                <div className='row form-row a'>
                    <div className='col-1'></div>
                    <div className='col-5'>
                        <div className='row'>
                            <div className='col-4'><label for="TodoName">Todo Name : </label></div>
                            <div className='col-7'> <input type='text' placeholder='Todo Name' value={NameInput} onChange={NameChange} /></div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='row'>
                            <div className='col-5'> <label for="TodoName">Todo Description : </label></div>
                            <div className='col-6'> <input type='text' placeholder='Todo Description' value={DescriptionInput} onChange={DescriptionChange} /></div>
                        </div>
                    </div>

                    <div className='col-1'>{
                        EditCard ?
                            <button type='button' className='btn btn-success box-button ' onClick={Update}>Update</button> : <button type='button' className='btn btn-primary box-button' onClick={DisplayName}>Add</button>
                    }</div>

                    <div className='row fom-row b'>

                        <div className='col'>
                            <label for="StatusFilter">Status Filter : </label>
                            <select id="overall-status" value={overallStatusFilter} onChange={(e) => setOverallStatusFilter(e.target.value)} name="card-overall-status" className='overall-status completion' >

                                <option value="All" selected >All</option>
                                <option value="Not Completed">Not Completed</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>


                </div>
            </form>

        </div>
    )
}

export default Box
