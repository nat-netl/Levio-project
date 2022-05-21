import React from 'react';
import s from './PoupStyle.module.scss'

const PopupAlert = ({active, setActive}) => {
  const token = document.head.querySelector('meta[name="csrf-token"]').content;


  return (
    <div className={ active ? s.popup + ' ' + s.is__open  :  s.popup} id={s["form-popup"]} >
      <div className={ active ? s.popup__overflow + ' ' + s.is__open : s.popup__overflow} onClick={e => e.stopPropagation()}>
          <div className={s["popup__in"]}>
              <div className="container">

                <div className={s["popup__top"]}>
                    <button className={s["popup__close"]} onClick={() => setActive(false)}>
                      <i className='material-icons'>close</i>
                    </button>
                </div>

                <div className={s["popup__body"]}>
                    <div className={s["form-box"]}>
                        <form className={s['']} action='/contact' method='POST'>
                        <input type="hidden" name="_token" value={token} />
                            <div className={s['items__form-box']}>
                              <div className={s['top__form-box']}>
                                <div className={s['item__form-items']}>
                                  <div className={s['action__form-item']}>
                                    <label>
                                      <input className={s['input__form-action']} name="name" placeholder='Ваше имя'/>
                                    </label>
                                  </div>
                                </div>
                                
                                <div className={s['item__form-items']}>
                                  <div className={s['action__form-item']}>
                                    <label>
                                      <input className={s['input__form-action']} name="company" placeholder='Компания'/>
                                    </label>
                                  </div>
                                </div>

                                <div className={s['item__form-items']}>
                                  <div className={s['action__form-item']}>
                                    <label>
                                      <input className={s['input__form-action']} type="tel" name="phone" placeholder='Номер телефона'/>
                                    </label>
                                  </div>
                                </div>

                                <div className={s['item__form-items']}>
                                  <div className={s['action__form-item']}>
                                    <label>
                                      <input className={s['input__form-action']} type="email" name="email" placeholder='e-mail'/>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className={s['item__form-items']}>
                                <div className={s['action__form-item']}>
                                  <label>
                                    <textarea className={s['input__form-action']}  name='message' placeholder='Сообщение' />
                                  </label>
                                </div>
                              </div>
                            </div>
                            
                            

                            <div className={s['action__form-box']}>
                              <button type="submit" className={s["btn__form-action"]}>
                                Отправить
                              </button>
                            </div>

                        </form>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PopupAlert