"use client"
import {Button, Calendar, CalendarCell, CalendarGrid, DatePicker, Heading} from 'react-aria-components';

export default function Home() {
    return (
        <DatePicker>
            <Calendar>
                <header className={"header"}>
                    <div>
                        <Heading/>
                        <Button slot="next" className={"arrow"}>&gt;</Button>
                    </div>

                    <div>
                        <Button slot="previous" className={"arrow"}>&lt;</Button>
                        <Button slot="next" className={"arrow"}>&gt;</Button>
                    </div>
                </header>
                <CalendarGrid>
                    {(date) => <CalendarCell date={date}/>}
                </CalendarGrid>
            </Calendar>
        </DatePicker>
    );
}
