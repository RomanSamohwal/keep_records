import {ProgressSpinner} from 'primereact/progressspinner';

export const Progress = () => {
    return <div style={{minHeight: '80vh', display: "flex",
                            justifyContent: 'center', alignItems: 'center'}}>
            <ProgressSpinner strokeWidth="8" fill="#EEEEEE"
                             animationDuration=".5s"/>
    </div>
}
