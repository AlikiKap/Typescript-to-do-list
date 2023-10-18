import { TimerResult, useTimer } from "react-timer-hook"

interface MyTimerProps {
    expiryTimestamp: Date
}

function TaskTimer({ expiryTimestamp }: MyTimerProps) {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    }: TimerResult = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Timer</h1>
            <div style={{ fontSize: '100px' }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                const time = new Date();
                time.setMinutes(time.getMinutes() + 25);
                restart(time)
            }}>Restart</button>
        </div>
    );
}


export default TaskTimer