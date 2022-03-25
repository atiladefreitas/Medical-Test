import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding-bottom: 50px;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    height: 50px;
    gap: 10px;
    margin-top: 20px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 2rem;
    color: #000;
    cursor: pointer;
    background-color: #F3F3F3;

    &:hover {
        background-color: #B2E7FF;
        transition: all 0.3s ease-in-out;
        transform: scale3d(1.02, 1.02, 1.02);
    }
`;

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

