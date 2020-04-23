import React from "react"
import image from "./glas-metohije-logo-300x287.jpg"

const About = () => {
  return (
    <div className="l-about-content">
      <div className="l-img">
        <img src={image} alt="o nama" />
      </div>
      <div className="l-content">
        <p>
          Глас Метохије је невладино стручно,нестраначко и непрофитно
          удружење,основано на неодређено време ради остваривања циљева у
          области заштите и очувања културе,обичаја,традиције и идентитета Срба
          са подручја Метохије као и Косова.
        </p>
        <p>
          <strong>Циљеви удружења су:</strong>
        </p>
        <ol>
          <li>
            Учвршћивање и неговање свести како код Срба са Косова и Метохије
            тако и код српског народа у целини о значају Косовског завета као
            најважније и најбитније ствари за опстанак српског народа
          </li>
          <li>
            Активно учествовање на учвршћивању нераскидиве везе српског народа
            на Светој српској земљи са осталим припадницима српског националног
            корпуса
          </li>
          <li>
            Сарадња са свим институцијама државе Србије у остваривању програма,
            начела и циљева Удружења
          </li>
          <li>
            Сарадња и помоћ епархији Рашко-призренској и косовско-метохијској
          </li>
          <li>
            Активно учешће у организацији акција за опстанак и повратак
            расељених и свих оних који су пореклом са Косова и Метохије
          </li>
          <li>Сарадња са сличним организацијама који имају исти циљ</li>
          <li>Издавачка делатност</li>
          <li>
            Презентација културних,историјских и духовних вредности Косова и
            Метохије на јавним трибинама
          </li>
        </ol>
      </div>
    </div>
  )
}

export default About
