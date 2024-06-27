import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #22254b;
    margin-top: 20px;
`;

const LoginPageText = styled.h1`
    font-size: 26px;
    text-align: center;
    color: white;
    height: 50px;
`;

const LoginCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const Input = styled.input`
    padding: 13px;
    width: 310px;
    margin: 15px;
    border-radius: 15px;
`;

const ErrorMessage = styled.div`
    color: red;
    margin-top: -10px;
    font-size: 14px;
`;

// 제출하기 버튼 
const SumitCon = styled.div`
    display: relative;
    
`;

const SumIcon = styled.button`
    padding: 10px;
    width: 340px;
    margin: 13px;
    font-size: 1rem;
    justify-align: center;
    align-items: center;
    border-radius: 15px;
`;

export default function Login() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({mode: 'onChange'});

    const onSubmit = (data) => {   
        console.log(data);
    }; 

    return (
        <LoginPageContainer>
            <LoginPageText>로그인 페이지</LoginPageText>
            
            <LoginCon>
                <Input name="id" type="id" placeholder='아이디'
                {...register('id', {required: true, pattern: /^[a-zA-Z0-9]*$/i})}/>
                <ErrorMessage>
                    {errors.id && errors.id.type === 'required' && (<p>아이디를 입력해 주세요</p>)}
                    {errors.id && errors.id.type === 'pattern' && (<p>아이디를 형식에 맞게 입력해 주세요</p>)}
                </ErrorMessage>
                <Input name="password" type="password" placeholder='비밀번호' 
                {...register('password', {required: true, minLength: 4, maxLength: 12, pattern: /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
            })}/>
             <ErrorMessage>
                {errors.password && errors.password.type === 'required' && (<p>비밀번호를 입력해 주세요.</p>)}
                {errors.password && errors.password.type === 'minLength' && (<p>비밀번호는 4자리 이상이어야 합니다.</p>)}
                {errors.password && errors.password.type === 'maxLength' && (<p>비밀번호는 12자리까지 가능합니다.</p>)}
                {errors.password && errors.password.type === 'pattern' && (<p>영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.</p>)}
             </ErrorMessage>
            </LoginCon>

            <SumitCon type="submit">
                <SumIcon type="button" onClick={handleSubmit (onSubmit)}>
                    로그인
                </SumIcon>
            </SumitCon>
        </LoginPageContainer>
    )
}