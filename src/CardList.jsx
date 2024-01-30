
import React from 'react'
import { useState } from 'react';
import Box from './Box';
import Card from './Card';

function CardList() {
    const [NameInput, setNameInput] = useState('');
    const [DescriptionInput, setDescriptionInput] = useState('');
    const [DisplayState, setDisplayState] = useState([]);
    const [overallStatusFilter, setOverallStatusFilter] = useState('All');
    const [EditCard, setEditCard] = useState(null);


    const NameChange = (event) => {
        setNameInput(event.target.value);

    }

    const DescriptionChange = (event) => {
        setDescriptionInput(event.target.value);
    }


    const DisplayName = () => {
        if (NameInput.trim() === '' || DescriptionInput.trim() === '') {
            alert("Todo Name and Description are mandatory");
            return;
        }

        else {
            const newCard = {
                id: DisplayState.length + 1,
                name: NameInput,
                description: DescriptionInput,
                completed: "Not Completed"
            };
            setDisplayState([...DisplayState, newCard]);
            setNameInput('');
            setDescriptionInput('');

        }



    }

    const Edit = (id) => {
        const EditCardId = DisplayState.find((card) => card.id === id);
        setEditCard(EditCardId);
        setNameInput(EditCardId.name);
        setDescriptionInput(EditCardId.description);
    }

    const Update = () => {
        setDisplayState((prevcard) => prevcard.map((card) => card.id === EditCard.id ? { ...card, name: NameInput, description: DescriptionInput } : card));
        setEditCard(null);
        setNameInput('');
        setDescriptionInput('');
    }


    const DeleteCard = (id) => {
        const filtered_Cards = DisplayState.filter((card) => card.id != id);
        setDisplayState(filtered_Cards);
    }

    const handleCompletionChange = (id, completionStatus) => {
        const changedCards = DisplayState.map((card) => card.id === id ? { ...card, completed: completionStatus } : card);
        setDisplayState(changedCards);
    }

    const sortedCards = overallStatusFilter === "All" ? DisplayState : DisplayState.filter((card) => card.completed === overallStatusFilter);



    return (
        <div className='container-fluid box-container'>
            <Box EditCard={EditCard} Edit={Edit} Update={Update} NameInput= {NameInput} DescriptionInput = {DescriptionInput} DisplayName={DisplayName} NameChange={NameChange} DescriptionChange={DescriptionChange} overallStatusFilter={overallStatusFilter} setOverallStatusFilter={setOverallStatusFilter} />
            <div className='container-fluid cardlist-container'>
                <div className='row cardlist-container'>
                    {
                        sortedCards.map((card) => (
                            <Card id={card.id} {...card} card={card} Edit={Edit} DeleteCard={DeleteCard} sortedCards={sortedCards} DisplayState={DisplayState} setDisplayState={setDisplayState} handleCompletionChange={handleCompletionChange} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default CardList