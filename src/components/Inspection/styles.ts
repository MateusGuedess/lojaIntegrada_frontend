import styled from 'styled-components'

export const Container = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #8080803b;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: white;
        padding: 25px;
        position: relative;


            button.quit {
            position: absolute;
            background: transparent;
            border: none;
            color: #a29bfe;
            right: 15px;
            top: 15px;
            font-size: 20px;
            transition: .5s;
            cursor: pointer;

                &:hover {
                    color: #6c5ce7;
                }
            }

        div.accounts {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`
export const Button = styled.button`
    width: 150px;
    height: 40px;

    border: none;
    border-radius: 5px;
    background-color: #a29bfe;
    color: #fff;
    margin: 10px;
    transition: .5s;
    cursor: pointer;

    &:hover {
        background-color: #6c5ce7;
    }
`;