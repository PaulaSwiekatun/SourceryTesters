***Settings****
Documentation  Testy dzień 2 Robot //Tests Day 2 Robot
Library    OperatingSystem

*** Variables ***
${EXPECTED}     robotframework
${TEXT}         lorem ipsum text from the app

*** Keywords ***
Log Info
    [Arguments]  ${log_message}
    Log  ${log_message}
    
Log Info z opoznieniem
    [Arguments]  ${log_message}
    Log  ${log_message}
    Sleep    2s

Log Warning
     [Arguments]   ${log_message}
     Log  ${log_message}  WARN

Keyword That Fails 
       Fail
       
Get Y
       [Return]       YyYyY


*** Test Cases ***
Test o logowaniu INFO
    [Documentation]      Logowanie na poziomie INFO //INFO level login
    Log Info   wiadomość INFO

Test o logowaniu Warning
    [Documentation]       Logowanie na poziomi WARNING //Logging on WARNING level
    Log Warning    wiadomość WARN

Test z Repeat Keyword
    [Documentation]    Wykorzystywanie Repeat Keyword // Using Repeat Keyword
    Repeat Keyword    3 times    Log Info   this log clicks in 3 times // ten log wykona sie 3 razy
    Repeat Keyword   60    Log Info    this log will be 60 times
    Repeat Keyword   10s    Log Info z opoznieniem    this log will be executed 10 seconds

Test z Run Keyword And Continue On Failure
       Run Keyword And Continue On Failure    Keyword That Fails 
       Repeat Keyword    3 Times    Log Info    This log will be 3 times
       Repeat Keyword    5 times    Run Keyword And Continue On Failure  Keyword That Fails
       Repeat Keyword    5 times    Run Keyword And Continue On Failure  Log Info    It should be in green

Test z Run Keyword If
        [Documentation]    Potestujemy Run Keyword If w RF  //We will test Run Keyword If in RF
    ${EXPECTED}=    Set Variable    robot
    Run Keyword If    'true' == 'true'    Log Info    true is true
    Run Keyword If    '${EXPECTED}' == 'robot'    Log Info    it's a robot
    Run Keyword If    '${EXPECTED}' != 'robot'    Log Info    it's not a robot
    [Teardown]    Run Keyword If Test Passed    Log Info    all tests passed

Test Skip i Skip If
    [Documentation]      Potestujemy Skip
    Repeat Keyword    3 times    Log Info     this log will be 3 times
    Skip If    '${EXPECTED}' != 'robot'
    Skip   #przerywa test bezwarunkowo, kolejne Keyword'y nie beda wykonywane.
    Repeat Keyword    3 times    Log Info      this log will be 3 times
    [Teardown]        Log Info         it will be executed even if there was a skip earlier

Test z weryfikatorami Should
    [Documentation]  Wariacje z Sould...
    Should Be Equal As Strings   ${EXPECTED}    robotframework
    Should Be Equal              ${EXPECTED}    robotframework    ignore_case=True    #ignoruje duze litery
    Run Keyword And Continue On Failure   Should Be Equal As Strings    ${EXPECTED}    Robotframework
    Should Contain               ${TEXT}    ipsum
    Should Contain Any           ${TEXT}    ipsum  text
    Should Contain Any           ${TEXT}    ipsum  robot
    Should Start With            ${TEXT}    lorem
    Should End With              ${TEXT}    plikacji
    Should Not End With          ${TEXT}    ipsum
    Should Not Contain Any       ${TEXT}    robot   framework
    Should Be Equal As Numbers    10    10.1
   
   
Pobieranie Variable
    ${y}  Get Y
    Log Info    ${y}   

Ustawienie Variable
    ${i}  Set Variable  jeden
    Log Info    ${1}
    ${var}  Set Variable If    '${i}' == 'zero'    zero    nie zero  #pierwsza wartosc dla TRUE, druga dla FALSE
    Log Info    ${var}

Start Index
    Log Info    ${TEXT}[6:]      #zaczyna od litery na miejscu // starts with a letter in place

End Index
    Log Info ${TEXT}[:10]

Tworzenie list
       @{lista}   Create List    pierwszy   drugi   trzeci
       Log Many  @{lista}
       Log Info  ${lista}
       Log Info  ${lista}[0]     # wyswietli 'pierwszy' element
       Log Info  ${lista}[0:2]   # wyswietli 'pierwszy' i 'drugi' element
       Length Should Be    ${lista}   3
       Length Should Be    ${lista}   4


Tworzenie Dictionary
        &{dict}     Create Dictionary  pierwszy=1   drugi=2     trzeci=3
        Log Many            &{dict}
        Log Info            ${dict.drugi}
        Length Should Be    ${dict}    3