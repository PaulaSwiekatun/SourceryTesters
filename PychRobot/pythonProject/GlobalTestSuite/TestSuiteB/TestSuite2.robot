***Settings****
Documentation  Testy dzień 2 Robot
Library    OperatingSystem

*** Variables ***
${EXPECTED}     robotframework
${TEXT}         lorem ipsum tekst z aplikacji

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
    [Documentation]      Logowanie na poziomie INFO
    Log Info   wiadomość INFO

Test o logowaniu Warning
    [Documentation]       Logowanie na poziomi WARNING
    Log Warning    wiadomość WARN

Test z Repeat Keyword
    [Documentation]    Wykorzystywanie Repeat Keyword
    Repeat Keyword    3 times    Log Info    ten log wtkona sie 3 razy
    Repeat Keyword   60    Log Info    ten log bedzie 60 razy
    Repeat Keyword   10s    Log Info z opoznieniem    ten log bedzie wykonywany 10 sekund

Test z Run Keyword And Continue On Failure
       Run Keyword And Continue On Failure    Keyword That Fails 
       Repeat Keyword    3 Times    Log Info    Ten log bedzie 3 razy
       Repeat Keyword    5 times    Run Keyword And Continue On Failure  Keyword That Fails
       Repeat Keyword    5 times    Run Keyword And Continue On Failure  Log Info    Powinno byc na zielono

Test z Run Keyword If
        [Documentation]    Potestujemy Run Keyword If w RF
    ${EXPECTED}=    Set Variable    robot
    Run Keyword If    'true' == 'true'    Log Info    true is true
    Run Keyword If    '${EXPECTED}' == 'robot'    Log Info    to jest robot
    Run Keyword If    '${EXPECTED}' != 'robot'    Log Info    to nie jest robot
    [Teardown]    Run Keyword If Test Passed    Log Info    wszystkie testy passed

Test Skip i Skip If
    [Documentation]      Potestujemy Skip
    Repeat Keyword    3 times    Log Info    ten log bedzie 3 razy
    Skip If    '${EXPECTED}' != 'robot'
    Skip   #przerywa test bezwarunkowo, kolejne Keyword'y nie beda wykonywane.
    Repeat Keyword    3 times    Log Info    ten log bedzie 3 razy
    [Teardown]        Log Info         to  zostanie wykonane nawet jak wczesniej byl Skip

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
    Log Info    ${TEXT}[6:]      #zaczyna od litery na miejscu

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