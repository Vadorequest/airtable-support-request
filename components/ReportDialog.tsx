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
                        // Get form data
                        const reason = 'othing-is-wnorking-dude'
                        const message = 'Ceci est un message pas content'
                        const body = {
                            reason: reason,
                            message: message,
                        }
                        console.log('body', body)

                        // Call /api/airtable/createRecord with form data
                        fetch('/api/airtable/createRecord', {
                            method: 'post',
                            body: JSON.stringify(body)
                        })

                        // Display success/failure message (below form)
                        // Reset form
                    }}
                >
                    Envoyer
                </Button>
            </div>
        </div>
    );
}

export default ReportDialog;