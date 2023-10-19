import { TimerResult, useTimer } from "react-timer-hook"
import { FaPause } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import { FaRotateRight } from "react-icons/fa6"

interface MyTimerProps {
    expiryTimestamp: Date
}

function TaskTimer({ expiryTimestamp }: MyTimerProps) {
    const {
        totalSeconds,
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    }: TimerResult = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    const playOrPause = () => {
        if (isRunning)
            return (
                <button 
                className="timer-button"
                onClick={pause}><FaPause /></button>
            )
        else
            return (
                <button 
                className="timer-button"
                onClick={start}><FaPlay /></button>

            )

    }
    return (
        <div className="timer-container">
            <div style={{ fontSize: '100px' }}>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <div>
            <span>
                {playOrPause()}
            </span>
            <button 
            className="timer-button"
            onClick={() => {
                const time = new Date();
                time.setMinutes(time.getMinutes() + 25);
                restart(time)
            }}><FaRotateRight /></button>
            </div>
            <div>
            <button 
            className="break-button"
            onClick={() => {
                const time = new Date();
                time.setMinutes(time.getMinutes() + 5);
                restart(time)
            }}>Small Break</button>
            <button
            className="break-button"
            onClick={() => {
                const time = new Date();
                time.setMinutes(time.getMinutes() + 15);
                restart(time)
            }}>Long Break</button>
            </div>
            <h1>Pomodoro Timer</h1>
            <div>The Pomodoro Technique is a time management method that involves breaking your work into focused intervals, typically 25 minutes in length, followed by a short 5-minute break. After completing four such intervals, you take a longer break of around 15-30 minutes. This structured approach helps improve productivity and concentration by encouraging regular, dedicated work periods while preventing burnout.</div>


        </div>
    );
}


export default TaskTimer