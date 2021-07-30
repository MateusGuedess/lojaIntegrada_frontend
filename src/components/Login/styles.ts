import  styled from 'styled-components'
import Wallpaper from '../../assets/wallpaper.jpg'

export const Container = styled.section`
    background: #F6F6F6;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) {
        background-image: url(${Wallpaper});
        background-repeat: no-repeat;
        background-size: cover;
    }

    img {
        width: 50%;

        @media (max-width: 600px) {
            display: none;
        }
    }

    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;

        @media (max-width: 600px) {
            width: 100%;
        }

        h2 {
            font-weight: 300;

            @media (max-width: 600px) {
                color: #F6F6F6;
                font-weight: 700;
            }
        }

        .empty {
            width: 316.5px;
            font-size: 10px;
            color: #ff0000a6;
            text-align: left;

            & + input {
                margin-bottom: 8px;
            }
        }

        input {
            height: 40px;
            width: 300px;
            background-color: #f6f6f6;
            border: 1px solid lightgray;
            padding: 0 0 0 14.5px;
            border-radius: 5px;
            outline: none;



            & + input {
                margin-top: 8px;
            }
        }

        &_forgotPassword {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            width: 314.5px;
            
            label {
                display: flex;
                align-items: center;

                input {
                    height: auto;
                    width: auto;
                }

                span {
                    font-size: 12px;
                    color: #95a5a6;
                    font-weight: 100;
                    margin-left: 5px;
                    cursor: pointer;
                }
            }

            a {
                font-size: 12px;
                color: #000;
                text-decoration: none;
                font-weight: 100;

                @media (max-width: 600px) {
                    color: #fff;
                    font-weight: 500;
                }
            }
        }

        &_signLabel {
            font-size: 12px;
            color: #95a5a6;
            font-weight: 100;
        }

        &_signIcons {
            margin-top: 25px;
            width: 75px;
            display: flex;


            img {
                cursor: pointer;
                width: 25px;

                @media (max-width: 600px) {
                    display: inherit;
                }
            }

            a + a {
                margin-left: 20px;
            }
        }
    }

    .offButton {
        background: transparent;
        border: none;
        width: 75px;
        height: 38px;
        position: fixed;
        right: 0;
        top: 15px;
        transition: .5s;
        cursor: pointer;

        &:hover {
            transform: scale(1.5)
        }
    }
`;

export const Button = styled.button`
    width: 314.5px;
    height: 40px;

    border: none;
    border-radius: 5px;
    background-color: #a29bfe;
    color: #fff;
    margin: 25px;
    transition: .5s;
    cursor: pointer;

    &:hover {
        background-color: #6c5ce7;
    }
`;