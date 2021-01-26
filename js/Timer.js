    export { Timer as default }
    class Timer {
        constructor(promoList) {
            this.promoList = promoList;
            this.promo = 0;
        }
        getPromoText() {
            return [this.promoShort, this.promoFull];
        }
        getDates() {
            {
                let h, m, s;
                let [arr, retList] = [
                    [],
                    []
                ]
                const today = new Date();
                const curHour = today.getHours();
                this.promo = curHour < 6 ? 1 : curHour < 12 ? 2 : curHour < 18 ? 3 : curHour < 24 ? 4 : null
                this.promoFull = this.promoList[this.promo-1][1];
                this.promoShort = this.promoList[this.promo-1][0];
                const end = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate(),
                    6 * (this.promo) - 1,
                    0,
                    0);
                arr.push(
                    today.toTimeString().split(' ')[0].split(':'),
                    end.toTimeString().split(' ')[0].split(':')
                );
                h = parseInt(arr[1][0]) - parseInt(arr[0][0]);
                m = 59 - parseInt(arr[0][1]);
                s = 59 - parseInt(arr[0][2]);
                retList.push(h, m, s);
                return retList;
            }
        }
        start() {
            this.getDates(); // багиии
            setInterval(() => {
                let result = this.getDates();
                let h = $('.tn-atom[field="tn_text_1610057093908"]');
                //let hh = $('.tn-atom[field="tn_text_1610057045238"]');
                let m = $('.tn-atom[field="tn_text_1610057096648"]');
                let mm = $('.tn-atom[field="tn_text_1610057095295"]');
                let s = $('.tn-atom[field="tn_text_1610057099057"]');
                let ss = $('.tn-atom[field="tn_text_1610057097889"]');
                let mins = new String(result[1]).split('');
                let seconds = new String(result[2]).split('');

                h.html(result[0]);
                if (mins.length == 2) {
                    m.html(mins[1]);
                    mm.html(mins[0]);
                } else {
                    m.html(mins[0]);
                    mm.html('0');
                }
                if (seconds.length == 2) {
                    s.html(seconds[1]);
                    ss.html(seconds[0]);
                } else {
                    s.html(seconds[0]);
                    ss.html('0');
                }

            }, 1000);
        }
    }