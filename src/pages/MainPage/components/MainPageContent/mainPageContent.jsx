import React from "react";
import style from "./mainPageContent.scss";

const MainPageContent = () => (
    <main className={style.main}>

        <div className={style.main__paragraph}>
            <h2 className={style.main__header}>LoremIpsum</h2>
            <p className={style.main__text}>
                Значимость этих проблем настолько очевидна,
                что укрепление и развитие структуры позволяет выполнять важные задания по разработке соответствующий
                условий активизации.
                Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности
                обеспечивает широкому кругу (специалистов) участие в формировании позиций,
                занимаемых участниками в отношении поставленных задач. Товарищи! реализация намеченных плановых заданий
                играет важную роль в формировании существенных финансовых и административных условий.
                Товарищи! дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов)
                участие в формировании соответствующий условий активизации.
            </p>
        </div>
        <div className={style.main__paragraph}>

        <h2 className={style.main__header}>LoremIpsum</h2>
        <p className={style.main__text}>
            Значимость этих проблем настолько очевидна,
            что укрепление и развитие структуры позволяет выполнять важные задания по разработке соответствующий условий
            активизации.
            Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает
            широкому кругу (специалистов) участие в формировании позиций,
            занимаемых участниками в отношении поставленных задач.
        </p>
        </div>
        <div className={style.main__banner}>
            <h2 className={style.main__bannerHeader}>Lorem Webpack</h2>
            <p className={style.main__bannerContent}>
                Значимость этих проблем настолько очевидна,
                что укрепление и развитие структуры позволяет выполнять важные задания по разработке соответствующий условий
                активизации.
                Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает
                широкому кругу (специалистов) участие в формировании позиций,
                занимаемых участниками в отношении поставленных задач.
            </p>
        </div>
    </main>
);

export default MainPageContent;