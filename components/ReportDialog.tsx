import * as React from 'react'
import Button from '../components/Button'

type Props = {};

const ReportDialog = (props: Props) => {
    //const { } = props;

    return (
        <div>
            <div>
                <p>
                    <input id="choice1" type="checkbox" />
                    <label htmlFor="choice1">My choice 1</label>
                </p>
            </div>

            <div>
                <Button
                    handleOnClick={() => {
                        console.log('click meeee');
                    }}
                >
                    Envoyer
                </Button>
            </div>
        </div>
    );
}

export default ReportDialog;