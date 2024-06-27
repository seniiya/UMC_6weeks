import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const SignPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #22254b;
    margin-top: 20px;
`;

const SignPageText = styled.h1`
    font-size: 26px;
    text-align: center;
    color: white;
    height: 50px;
`;

const SignCon = styled.div`
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


const AlreadyID = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    font-size: 16px;  
    color: white;  
`



export default function Sign() {
    const navigate = useNavigate();  

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({mode: 'onChange'});  // 입력창 작성 때마다 바로 유효성 검사


    // 폼 제출 시 실행되는 로직 
    const onSubmit = (data) => {    // 입력한 정보 console에 출력 
        console.log(data);
        // 필요한 로직 추가하여 서버로 데이터 전송하거나 다른 작업 수행 가능함.
        //회원가입 성공 알림
        alert('회원가입 성공! 홈페이지로 이동');
        navigate('/');
    }; 

    
    return (
        
        <SignPageContainer >
            <SignPageText>회원가입 페이지</SignPageText>

            <SignCon>
                <Input name="name" type="text"  
                placeholder='이름을 입력해주세요'
                {...register('name', {required: true, pattern: /^[가-힣a-zA-Z\s]*$/i})}/> 

                <ErrorMessage>
                    {errors.name && errors.name.type === 'required' && (<p>이름을 입력해 주세요</p>)}
                    {errors.name && errors.name.type === 'pattern' && (<p>이름을 정확히 기입해 주세요.</p>)}
                </ErrorMessage>

                <Input name="id" type="id" placeholder='아이디를 입력해주세요'
                {...register('id', {required: true, pattern: /^[a-zA-Z0-9]*$/i})}/>
                <ErrorMessage>
                    {errors.id && errors.id.type === 'required' && (<p>아이디를 입력해 주세요!</p>)}
                    {errors.id && errors.id.type === 'pattern' && (<p>아이디를 형식에 맞게 입력해 주세요</p>)}
                </ErrorMessage>
                
                <Input name="email" type="email" placeholder='이메일을 입력해주세요'
                {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}/>
                <ErrorMessage>
                    {errors.email && errors.email.type === 'required' && (<p>이메일을 입력해 주세요</p>)}
                    {errors.email && errors.email.type === 'pattern' && (<p>이메일 형식에 맞게 다시 입력해 주세요!</p>)}
                </ErrorMessage>

                
                <Input name="age" type="age" placeholder='나이을 입력해주세요'
                {...register('age', {required: true, min: 19, pattern: {
                            value: /^[0-9]+$/i
                            }, 
                          validate: {
                            // negative: (value) => parseInt(value) >= 0,
                            decimal: (value) => Number.isInteger(parseFloat(value)),
                          }      
                })}/>
                <ErrorMessage>
                    {errors.age && errors.age.type === 'required' &&(<p>나이를 입력해 주세요</p>)}
                    {errors.age && errors.age.type === 'min' && (<p>우리 영화 사이트는, 19살 이상만 가입이 가능합니다.</p>)}
                    {errors.age && errors.age.type === 'pattern' &&(<p>나이를 입력해 주세요!</p>)}
                    {errors.age && errors.age.type === 'validate' && (<p>나이는, 음수가 될 수 없습니다.</p>)}
                    {errors.age && errors.age.type === 'decimal' && (<p>나이는, 소수가 될 수 없습니다.</p>)}
                </ErrorMessage>
                {/* 음수, 소수  안됨 ㅜㅜ  */}

                <Input name="password" type="password" placeholder='비밀번호을 입력해주세요'
                {...register('password', {required: true, minLength: 4, maxLength: 12, pattern: /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
                })}/>
                 <ErrorMessage>
                    {errors.password && errors.password.type === 'required' && (<p>비밀번호를 입력해 주세요.</p>)}
                    {errors.password && errors.password.type === 'minLength' && (<p>비밀번호는 4자리 이상이어야 합니다.</p>)}
                    {errors.password && errors.password.type === 'maxLength' && (<p>비밀번호는 12자리까지 가능합니다.</p>)}
                    {errors.password && errors.password.type === 'pattern' && (<p>영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.</p>)}
                 </ErrorMessage>

                <Input name="passwdcon" type="password" placeholder='비밀번호 확인'
                {...register('passwdcon', {required: true,
                    validate: (value) => value === getValues('password'),
                })}/>
                <ErrorMessage>
                    {errors.passwdcon && errors.passwdcon.type === 'required' && (<p>비밀번호를 다시 입력해주세요.</p>)}
                    {errors.passwdcon && errors.passwdcon.type === 'validate' && (<p>비밀번호가 일치하지 않습니다.</p>)}
                   
                </ErrorMessage>
                
            </SignCon>

            <SumitCon type="submit">
                <SumIcon type="button" onClick={handleSubmit (onSubmit)}>
                    제출하기
                </SumIcon>
               
            </SumitCon>


            <AlreadyID>
                <p>이미 아이디가 있으신가요?</p>
                <p style={{fontWeight: 600}} onClick={()=>navigate('/login')}>로그인 페이지로 이동하기</p>
            </AlreadyID>
            

        </SignPageContainer>
            
    )
};

