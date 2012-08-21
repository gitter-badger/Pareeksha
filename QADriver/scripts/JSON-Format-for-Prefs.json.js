FSR.surveydefs = [{
    site: 'VLSC',
    name: 'browse',
    section: 'servicecenter',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'later',
        what: 'qualifier'
    },
	criteria: {
        sp: 0,
        lf: 1,
		
		locales: [{
            locale: 'en',
			sp: 3,
            lf: 2
        }, {
            locale: 'fr',
            sp: 50,
            lf: 2
        }, {
            locale: 'de',
            sp: 50,
            lf: 2
        }, {
            locale: 'it',
            sp: 50,
            lf: 2
        }, {
            locale: 'ja',
            sp: 50,
            lf: 2
        }, {
            locale: 'pt',
            sp: 50,
            lf: 2
        }, {
            locale: 'ru',
            sp: 50,
            lf: 2
        }, {
            locale: 'es',
            sp: 50,
            lf: 2
        }, {
            locale: 'zh-CN',
            sp: 50,
            lf: 2
        }, {
            locale: 'zh-TW',
            sp: 50,
            lf: 2
        }]
    },
    links: {
        pop: [{
            tag: 'a',
            attribute: 'href',
            patterns: ['licensingadmin.microsoft.com', 'msdnbenefits.partners.extranet.microsoft.com', 'login.live.com/login.srf'],
            pu: true
        }]
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
    repeatdays: 90,
    
    repeatoverride: false,
    
    altcookie: {
        name: 'msresearch',
        domain: 'microsoft.com',
        path: '/',
        value: '1',
        persistent: false
    },
    
    language: {
        src: 'meta',
        name: 'DCSext.HostLocaleID',
        locales: [{
            match: [/en-US/i, /en/i],
            locale: 'en'
        }, {
            match: [/fr-FR/i, /fr-CA/i, /fr/i],
            locale: 'fr'
        }, {
            match: [/de-DE/i, /de/i],
            locale: 'de'
        }, {
            match: [/it-IT/i, /it/i],
            locale: 'it'
        }, {
            match: [/ja-JP/i, /ja/i],
            locale: 'ja'
        }, {
            match: [/pt-BR/i, /pt-PT/i, /pt/i],
            locale: 'pt'
        }, {
            match: [/ru-RU/i, /ru/i],
            locale: 'ru'
        }, {
            match: [/es-ES/i, /es-MX/i, /es/i],
            locale: 'es'
        }, {
            match: [/zh-CN/i],
            locale: 'zh-CN'
        }, {
            match: [/zh-TW/i],
            locale: 'zh-TW'
        }]
    },
    
    exclude: {
        cookies: [{
            name: 'msresearch',
            value: '1'
        }]
    },
    
    ipexclude: 'fsr$ip',
    
    invite: {
        exclude: {
            local: [],
            referrer: []
        },
        include: {
            local: ['.']
        },
        
        width: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        timeout: 0,
        buttons: {
            accept: "Yes, I'll give feedback",
            decline: 'No thanks'
        },
        hideOnClick: false,
        css: 'foresee-dhtml.css',
        
        locales: [{
            locale: 'en',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">We\'d like your feedback.</b></font>\
				<br><br>Thank you for visiting our site. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.\
				<br><br><b>The survey is designed to measure your entire site experience and will appear at the <u>end of your visit</u>.</b>\
				<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Yes, I\'ll give feedback',
                decline: 'No thanks'
            }
        }, {
            locale: 'fr',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">N\'hésitez pas à nous faire part de vos commentaires.</b></font>\
				<br><br>Merci d\'avoir visité notre site. Vous avez été tiré(e) au sort pour participer à une enquête de satisfaction visant à vous offrir une meilleure expérience sur ce site.\
				<br><br><b>Cette enquête est conçue pour évaluer l\'ensemble de votre expérience sur ce site. Elle s\'affichera <u>à la fin de votre visite</u>.</b>\
				<br><br><font size=\"1\">Cette enquête est gérée par une société tierce, ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Oui, j\'accepte de faire part de mes commentaires',
                decline: 'Non merci'
            }
        }, {
            locale: 'de',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">Wir würden uns über Ihr Feedback freuen.</b></font>\
				<br><br>Vielen Dank für Ihren Besuch auf unserer Website. Sie wurden per Zufall ausgewählt, an einer Umfrage zur Kundenzufriedenheit teilzunehmen, mit der wir herausfinden möchten, wie wir die Qualität Ihrer Website-Erfahrung verbessern können.\
				<br><br><b>Die Umfrage wird durchgeführt, um die Qualität Ihrer individuellen Website-Erfahrung zu erfassen und wird am <u>Ende Ihres Besuchs</u> angezeigt.</b>\
				<br><br><font size=\"1\">Diese Umfrage wird von einem unabhängigen Unternehmen namens ForeSee Results durchgeführt.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Ja, ich möchte mein Feedback abgeben.',
                decline: 'Nein, danke.'
            }
        }, {
            locale: 'it',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">Il suo contributo è per noi di grande importanza.</b></font>\
				<br><br>Grazie per aver visitato il nostro sito. La informiamo che è stato selezionato per partecipare a un sondaggio sulla soddisfazione dei clienti finalizzato al miglioramento della sua esperienza Web.\
				<br><br><b>Il sondaggio è stato studiato per valutare la sua esperienza Web generale e verrà visualizzato al <u>termine della sua visita</u>.</b>\
				<br><br><font size=\"1\">Questo sondaggio viene condotto da una società indipendente che si occupa di ricerche di mercato, ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Sì, fornirò un feedback',
                decline: 'No, grazie'
            }
        }, {
            locale: 'ja',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">ご意見をお待ちしております。</b></font>\
				<br><br>弊社のサイトをご利用いただきありがとうございます。 お客様には、今後いっそう快適に本 Web サイトをご利用いただくために、改善すべき点を調べるパートナー満足度調査にご協力いただきたく、無作為に選ばれました。\
				<br><br><b>このアンケートはサイト全体の使いやすさを評価していただくことを目的とするものであり、<u>サイトを閉じる</u>際に表示されます。</b>\
				<br><br><font size=\"1\">このアンケートは、独立会社 ForeSee Results によって実施されるものです。</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'フィードバックを送る',
                decline: '回答しない'
            }
        }, {
            locale: 'pt',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">Obrigado por seu comentário.</b></font>\
				<br><br>Obrigado por visitar nosso site. Você foi escolhido(a) ao acaso para participar de uma pesquisa de satisfação do cliente para nos dizer como podemos melhorar a sua experiência no site.\
				<br><br><b>A pesquisa foi desenvolvida para medir sua experiência no site e será exibida no <u>fim da sua visita</u>.</b>\
				<br><br><font size=\"1\">A pesquisa é conduzida por uma empresa independente, a ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Sim, irei fornecer meu comentário',
                decline: 'Não, obrigado.'
            }
        }, {
            locale: 'ru',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">Мы бы хотели получить ваш отзыв.</b></font>\
				<br><br>Спасибо за посещение нашего веб-сайта! Вы были случайным образом выбраны для участия в опросе степени удовлетворенности клиентов, в рамках которого мы собираем отзывы для улучшения работы веб-сайта.\
				<br><br><b>Этот опрос призван оценить в целом ваше впечатление от посещения сайта; анкета опроса появится <u>в конце вашего посещения сайта</u>.</b>\
				<br><br><font size=\"1\">Этот опрос проводится независимой компанией ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Да, я напишу отзыв',
                decline: 'Нет, спасибо'
            }
        }, {
            locale: 'es',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">Nos gustaría recibir sus comentarios.</b></font>\
				<br><br>Gracias por visitar nuestro sitio. Ha sido elegido al azar para participar en una encuesta de satisfacción del cliente para hacernos saber cómo podemos mejorar su experiencia del sitio web.\
				<br><br><b>La encuesta ha sido diseñada para medir su experiencia total en el sitio y aparecerá al <u>final de su visita</u>.</b>\
				<br><br><font size=\"1\">Esta encuesta la realiza una empresa independiente, ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Sí, deseo ofrecer mis comentarios',
                decline: 'No, gracias'
            }
        }, {
            locale: 'zh-CN',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">我们期待您的反馈！</b></font>\
				<br><br>感谢您访问我们的网站。 系统随机抽取您参加一份客户满意度调查，让我们了解我们的网站哪些地方需要改进。\
				<br><br><b>本调查旨在衡量您的总体网站体验，将在<u>您访问结束时显示</u>。</b>\
				<br><br><font size=\"1\">本调查由独立的公司 ForeSee Results 执行。</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: '是的，我将提供反馈意见',
                decline: '不，谢谢'
            }
        }, {
            locale: 'zh-TW',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
				<b><font size=\"3\">我們希望獲得您的意見反應。</b></font>\
				<br><br>感謝您造訪我們的網站。 您被隨機選中參加一份客戶滿意度調查，調查目的是為了瞭解我們能如何提升您瀏覽網站的體驗。\
				<br><br><b>本問卷調查是為了評估您的整體網站體驗而設計，問卷會在您<u>結束瀏覽時</u>顯示。</b>\
				<br><br><font size=\"1\">本問卷調查承辦單位為獨立公司 ForeSee Results。</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: '好的，我願意提供意見反應',
                decline: '不，謝謝'
            }
        }],
        
        hide: ['silverlightControlHost', 'SilverlightHost', 'silverlight-2', 'application/x-silverlight-2']
    },
    
    tracker: {
        width: '500',
        height: '375',
        timeout: 3,
        adjust: true,
        alert: {
            enabled: false,
            message: '.'
        },
        url: 'tracker_EN.html',
        
        locales: [{
            locale: 'en',
            url: 'tracker_EN.html'
        }, {
            locale: 'fr',
            url: 'tracker_FR.html'
        }, {
            locale: 'de',
            url: 'tracker_DE.html'
        }, {
            locale: 'it',
            url: 'tracker_IT.html'
        }, {
            locale: 'ja',
            url: 'tracker_JA.html'
        }, {
            locale: 'pt',
            url: 'tracker_PT.html'
        }, {
            locale: 'ru',
            url: 'tracker_RU.html'
        }, {
            locale: 'es',
            url: 'tracker_ES.html'
        }, {
            locale: 'zh-CN',
            url: 'tracker_CN.html'
        }, {
            locale: 'zh-TW',
            url: 'tracker_TW.html'
        }]
    },
    
    survey: {
        width: 550,
        height: 600
    },
    
    qualifier: {
        width: '625',
        height: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
        css: false,
        url: 'qualifying.html',
        
        locales: [{
            locale: 'en',
            url: 'qualifying_EN.html',
            buttons: {
                accept: 'Continue'
            }
        }, {
            locale: 'fr',
            url: 'qualifying_FR.html',
            buttons: {
                accept: 'Continuer'
            }
        }, {
            locale: 'de',
            url: 'qualifying_DE.html',
            buttons: {
                accept: 'Weiter'
            }
        }, {
            locale: 'it',
            url: 'qualifying_IT.html',
            buttons: {
                accept: 'Continua'
            }
        }, {
            locale: 'ja',
            url: 'qualifying_JA.html',
            buttons: {
                accept: '続行する'
            }
        }, {
            locale: 'pt',
            url: 'qualifying_PT.html',
            buttons: {
                accept: 'Continuar'
            }
        }, {
            locale: 'ru',
            url: 'qualifying_RU.html',
            buttons: {
                accept: 'Продолжить'
            }
        }, {
            locale: 'es',
            url: 'qualifying_ES.html',
            buttons: {
                accept: 'Continuar'
            }
        }, {
            locale: 'zh-CN',
            url: 'qualifying_CN.html',
            buttons: {
                accept: '继续'
            }
        }, {
            locale: 'zh-TW',
            url: 'qualifying_TW.html',
            buttons: {
                accept: '繼續'
            }
        }]
    },
    
    cancel: {
        url: 'cancel_EN.html',
        width: '500',
        height: '300'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    meta: {
        referrer: true,
        terms: true,
        ref_url: true,
        url: true,
        url_params: false
    },
    
    events: {
        enabled: true,
        id: true,
        codes: {
            purchase: 800,
            items: 801,
            dollars: 802
        },
        pd: 7,
        custom: {}
    },
    
    pool: 100,
    
    previous: false,
    
    analytics: {
        google: false
    },
    
    cpps: {
        CountryCode: {
            source: 'meta',
            name: 'DCSext.CountryCode'
        },
        HostLocaleID: {
            source: 'meta',
            name: 'DCSext.HostLocaleID'
        }
    },
    mode: 'first-party'
};

