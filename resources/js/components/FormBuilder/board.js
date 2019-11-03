import React, { Component }  from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';
import { genField } from './field';

export default class Board extends Component {
    constructor() {
        super();

        this.state = {
            fields: [
                { id: 1, type: 'input' },
				{ id: 2, type: 'select' },
				{ id: 3, type: 'textarea' }
            ]
        }
    }

    render() {
        return (
            <div className="col">
                <div className="card bg-light mb-3">
                    <div className="card-header">BUILDER BOARD</div>
                    <div className="card-body">
                        <div className="d-flex justify-content-start">
                            <Container groupName="1" lockAxis="y" dragHandleSelector=".column-drag-handle" getChildPayload={i => this.state.fields[i]} onDrop={e => this.setState({ fields: applyDrag(this.state.fields, e) })}>
                            {
                                this.state.fields.map((fld, i) => {
                                    return (
                                        <Draggable key={i}>
                                            <div className="draggable-board-item">
                                                <span className="column-drag-handle" style={{float:'left', padding:'0 10px'}}>&#x2630;</span>
                                                {genField(fld, true)}
                                            </div>
                                        </Draggable>
                                    );
                                })
                            }
                            </Container>
                        </div>       
                    </div>
                </div>
            </div>      
        );
    }
}