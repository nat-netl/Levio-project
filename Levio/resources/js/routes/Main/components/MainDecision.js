import React from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'
import Decisions from '../../../assets/global/GlobalDecisionItems.tsx'

const MainDecision = () => {


  return (
    <section className='section container'>
      <div className={s['left__section-decision']}>
        <h2 className={s['title__section-left']}>Решения</h2>
        <div class="page-line"></div>
      </div>
      <div className={s['section-decision']}>
  
      <div className={s['box__contact-bottom']}></div>

        <div className={s['right__section-decision']}>
          <div className={s['items__section-right']}>
              <div className={s['items__right']}>
                {
                  Decisions.map((dec) => {
                    return (
                      <div className={s['item__section-items']} key={dec.id}>
                        <div className={s['title__section-item']} >
                    
                          <span className={s['text__section-title']}>{dec.title}</span>
                          
                        </div>
                        <div className={s['text__section-item']}>
                          <span className={s['content__section-text']}>
                            {dec.text}
                          </span>
                        </div>
                      </div>

                    )
                  })
                
                }
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default MainDecision