# **_subbey_**

subbey is an lightweight and asynchronous Reddit API wrapper to retrieve post easily

# Usage

CommonJS

```js
const {subbey} = require('subbey');
subbey({sub: 'dank', max: 1, nfsw: false});
```

ECMAScript

```ts
import {subbey} from 'subbey';
subbey({sub: 'dank', max: 1, nfsw: false});
```

# Options

_sub_

_The subreddit you want to recieve posts from_
**type: string**
**default: "memes"**

_nfsw_

_Wether you want to recieve NFSW posts_
**type: boolean**
**default: false**

_max_

_The number of results you want to recieve_
**type: number**
**default: 3**
