import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        // Enviar peticion al backend

        if ( calendarEvent._id ) {
            //Actualizando
        } else{
            //Creando
            dispatch( onAddNewEvent( { ...calendarEvent, _id: new Date().getTime() } ) )
        }
    }


    return { 
        //Propiedades
        events,
        activeEvent,
        //Metodos
        setActiveEvent,
        startSavingEvent
    }
}
