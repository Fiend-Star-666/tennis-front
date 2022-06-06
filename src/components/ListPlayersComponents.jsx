import React, { Component } from 'react';
import PlayerService from '../services/PlayerService';
import Moment from 'moment';

class ListPlayersComponents extends Component{
    constructor(props){
        super(props) 
        this.state = {
            playersData: []
        }
    }

    componentDidMount(){
        PlayerService.getAllPlayers().then((res) => 
        { 
            this.setState({ playersData: res.data});
        });
    }

    render() {
        return (
            <div>
                <div className = "row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {
                            this.state.playersData.map(
                                playerData =>
                                <tr key = {playerData.id}>
                                    <td>    {playerData.rankOfPlayer}                              </td>
                                    <td>    {playerData.name}               </td>
                                    <td style={{width: '200px'}}>    {Moment(playerData.dateOfBirth).format('DD-MM-yyyy')}                    </td>
                                    <td>    {playerData.points}              </td>
                                    
                                    
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListPlayersComponents;

/*

                <h2 className="text-center">All Vehicle Reservation:{this.state.id}  </h2>
                <div className= "row">
                
                </div>
                <br></br>

                <div className = "row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Reservation Number</th>
                                <th>Creation Date</th>
                                <th>Due Date</th>
                                <th>Pickup Location Name</th>
                                <th>Return Location Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {
                            this.state.vrReservations.map(
                                vrReservation =>
                                <tr key = {vrReservation.id}>
                                    <td>    {vrReservation.id}                              </td>
                                    <td>    {vrReservation.reservationNumber}               </td>
                                    <td style={{width: '200px'}}>    {Moment(vrReservation.creationDate).format('DD-MM-yyyy')}                    </td>
                                    <td style={{width: '200px'}}>    {Moment(vrReservation.dueDate).format('DD-MM-yyyy')}                         </td>
                                    <td>    {vrReservation.pickupLocationName}              </td>
                                    <td>    {vrReservation.returnLocationName}              </td>
                                    <td>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vrReservation.id)} className="btn btn-primary btn-sm">View Vehicle</button>
                                    </td>
                                    
                                    
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>

*/