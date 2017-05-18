const DOMAIN = "http://localhost:3005";

/*
请求所有的博文
 /api/posts?author=xxx
 */
export const fetchPosts = async(id)=>{
  let url = DOMAIN+`/api/posts?author=${id}`;
  try{
    var result = await fetch(url,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  }
    })
  }catch(e){
    console.log(e);
  }
  if(result){
    return result.json();
  }else{
    return {
       code:-2,
       msg:"未知错误"
    }
  }
}
/*
/api/posts/
 */
export const fetchPost = async(postId)=>{
  let url = DOMAIN+`/api/posts/${postId}`;
  try{
    var result = await fetch(url,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  }
    })
  }catch(e){
    console.log(e);
  }
  if(result){
    return result.json();
  }else{
    return {
       code:-2,
       msg:"未知错误"
    }
  }
}

/*
删除博文
 */
export const deletePost = async(postId)=>{
   let url = DOMAIN+`/api/posts/${postId}/remove?user_id=58fb5c4af81289702783067d`;
   try{
     var result = await fetch(url,{
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
   }
     })
   }catch(e){
     console.log(e);
   }
   if(result){
     return result.json();
   }else{
     return {
       code:-2,
       msg:"未知错误"
     }
   }
}

/*
发表博文
 */
 export const addPost = async(article)=>{
    let url = DOMAIN+"/api/posts";
    try{
      var result = await fetch(url,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    },
    body: JSON.stringify({
         title:article.title,
         context:article.context,
         user_id:"58fb5c4af81289702783067d",
    })
      })
    }catch(e){
      console.log(e);
    }
    if(result){
      return result.json();
    }else{
      return {
       code:-2,
       msg:"未知错误"
      }
    }
 }
 // GET api/posts/edit/:postId  获取编辑文章的信息
 export const fetchEditPost = async(postId)=>{
   let url = DOMAIN+`/api/posts/edit/${postId}`;
   try{
     var result = await fetch(url,{
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
   }
     })
   }catch(e){
     console.log(e);
   }
   if(result){
     return result.json();
   }else{
     return {
        code:-2,
        msg:"未知错误"
     }
   }
 }

/*
更新博文
*/
export const updatePost = async(postId,article)=>{
   let url = DOMAIN+`/api/posts/${postId}/edit`;
   try{
     var result = await fetch(url,{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     title:article.title,
     context:article.context,
     user_id:"58fb5c4af81289702783067d",
   })
     })
   }catch(e){
     console.log(e);
   }
   console.log(result)
   if(result){
     return result.json();
   }else{
     return {
        code:-2,
        msg:"未知错误"
     }
   }
}



/*
登录
 */
export const login = async(params)=>{
  let url = DOMAIN+'/api/signIn',
      {account,password}=params;
  try{
    var result = await fetch(url,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    account: account,
    password:password,
  })
    })
  }catch(e){
    console.log(e);
  }
  if(result){
    return result.json();
  }else{
    return {
     code:-2,
     msg:"未知错误"
    }
  }
}

/*
添加评论
 */
export const addComment = async(params)=>{
  let{articleId,comment,userId}=params,
  url = DOMAIN+`/api/posts/${articleId}/comment`;
  try{
    var result = await fetch(url,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    articleId:articleId,
    content:comment,
    user_id:userId,
  })
    })
  }catch(e){
    console.log(e);
  }
  if(result){
    return result.json();
  }else{
    return {
     code:-2,
     msg:"未知错误"
    }
  }
}

/*
删除评论
 */
// GET /posts/:postId/comment/:commentId/remove 删除一条留言
export const deleteComment = async(params)=>{
  let{articleId,commentId,user_id}=params,
  url = DOMAIN+`/posts/:postId/comment/:commentId/remove`;
  try{
    var result = await fetch(url,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
  }
    })
  }catch(e){
    console.log(e);
  }
  if(result){
    return result.json();
  }else{
    return {
     code:-2,
     msg:"未知错误"
    }
  }
}
