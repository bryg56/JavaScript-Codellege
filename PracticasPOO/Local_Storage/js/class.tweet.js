class tweet {
    content = '';

    constructor() {

    }

    addtweet(contenttweet) {
        this.content = contenttweet;
        console.log(this.content);

        if (contenttweet != '') {
            this.content = contenttweet;
            console.log(this.content);
            this.createtweet(this.content);
            this.addtweetLS(this.content);
        } else {
            console.log('tweet vacio');
            Swal.fire({
                position: 'top-end',
                type: 'warning',
                title: 'Tweet Vacìo',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    createtweet(tweet2) {
        const li = document.createElement('li');
        li.classList = "list-group-item rounded-pill text-break"
        const btnclose = document.createElement('button');
        btnclose.classList = 'close';
        const spanclose = document.createElement('span');
        spanclose.classList = 'badge badge-pill badge-light text-danger';
        spanclose.setAttribute = ('aria-hidden', 'true');
        spanclose.textContent = 'x';

        btnclose.appendChild(spanclose);
        li.innerText = tweet2;
        listatweets.appendChild(li);
        li.appendChild(btnclose);
    }
    addtweetLS(tweet) {
        let tweets;
        tweets = this.getLocalStorage();
        tweets.push(tweet);
        localStorage.setItem('tweets', JSON.stringify(tweets));

    }
    getLocalStorage() {
        let tweets;
        if (localStorage.getItem('tweets') === null) {
            tweets = [];
        } else {
            tweets = JSON.parse(localStorage.getItem('tweets'));

        }
        return tweets;
    }
    removeTweetLS(tweetD) {
        let tweets = this.getLocalStorage();
        tweets.forEach(function(tweet, index) {
            if (tweetD == tweet) {
                tweets.splice(index, 1);
            }
        });
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }

}