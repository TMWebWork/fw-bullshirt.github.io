    export { StartTimer as default }
    const genNums = () => {
        let elem = 0;
        const today = new Date();
        let nowD = new Date().toTimeString().split(' ')[0].split(':');
        let curHour = today.getHours();
        if (curHour < 6) elem = 1;
        else if (curHour < 12) elem = 2;
        else if (curHour < 18) elem = 3;
        else if (curHour < 24) elem = 4;
        let end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6 * (elem) - 1, 0, 0);
        let endArr = end.toTimeString().split(' ')[0].split(':');
        return [nowD, endArr];
    }

    function returnTime(list) {
        let h, m, s;
        h = parseInt(list[1][0]) - parseInt(list[0][0]);
        m = 59 - parseInt(list[0][1]);
        s = 59 - parseInt(list[0][2]);
        let retList = [];
        retList.push(h, m, s);
        return retList;
    }
    const StartTimer = () => {
        setInterval(() => {
            let result = returnTime(genNums());
            let h = $('.tn-atom[field="tn_text_1610057093908"]');
            let hh = $('.tn-atom[field="tn_text_1610057045238"]');
            let m = $('.tn-atom[field="tn_text_1610057096648"]');
            let mm = $('.tn-atom[field="tn_text_1610057095295"]');
            let s = $('.tn-atom[field="tn_text_1610057099057"]');
            let ss = $('.tn-atom[field="tn_text_1610057097889"]');
            h.html(result[0]);
            let mins = new String(result[1]);
            mins = mins.split('')
            let seconds = new String(result[2]);
            seconds = seconds.split('');
            m.html(mins[1]);
            mm.html(mins[0]);
            s.html(seconds[1]);
            ss.html(seconds[0]);
        }, 1000);
    }