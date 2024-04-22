*** Settings ***
Documentation   Zadanie samodzielne z RF  //RF stand-alone task

*** Variables ***
${EXPECTED_TEXT}     myOwnRobot

*** Keywords ***
Log Info
    [Arguments]     ${log_message}
    Log     ${log_message}

*** Test Cases ***
Test porownania wartosci
    Log Info    ${EXPECTED_TEXT}
    Should Be Equal    ${EXPECTED_TEXT}    myOwnRobot
    Should Be Equal    ${EXPECTED_TEXT}    myOWNRobot       Wartosci nie sa takie same //The values are not the same

