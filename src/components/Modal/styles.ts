import styled from "styled-components";


export const Container = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #8080803b;

    section {
        display: flex;
        width: 300px;
        background: #fff;
        height: 150px;
        flex-direction: column;
        position: relative;

        button {
            position: absolute;
            background: transparent;
            border: none;
            color: #a29bfe;
            right: 15px;
            top: 15px;
            font-size: 20px;
            transition: .5s;

            &:hover {
                color: #6c5ce7;
            }
        }

        span {
            text-align: center;
            align-content: center;
            margin: auto 0;
            display: flex;
            align-items: center;
            justify-content: center;
            
            img {
                width: 25px;
                height: 25px;
                margin-right: 10px;
            }
        }
    }
`