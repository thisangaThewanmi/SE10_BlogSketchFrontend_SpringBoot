$('#savePost').click(function (){
    console.log("clicked save post");
    let postId = $('#postId').val();
    let postTitle =$('#postTitle').val();;
    let postText =$('#postText').val();;
    let postCategory =$('#postCategory').val();

    console.log(postId, postTitle, postText, postCategory);

    $.ajax({
        url:"http://localhost:8080/blog/savePost",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "id":postId,
            "category":postCategory,
            "text":postText,
            "title":postTitle
        }),
        success:function (results){
                console.log(results)
            alert('Niceeeeeeeeeeuuuuuuuuuuuuuu')
        },

        error:function (error){
            console.log(error)
            alert('ewwwwwwwww')

        }
    })
    }

)


$('#savePost').click(function (){
        console.log("clicked save post");
        let postId = $('#postId').val();
        let postTitle =$('#postTitle').val();;
        let postText =$('#postText').val();;
        let postCategory =$('#postCategory').val();

        console.log(postId, postTitle, postText, postCategory);

        $.ajax({
            url:"http://localhost:8080/blog/savePost",
            method:"POST",
            contentType:"application/json",
            "data":JSON.stringify({
                "id":postId,
                "category":postCategory,
                "text":postText,
                "title":postTitle
            }),
            success:function (results){
                console.log(results)
                alert('Niceeeeeeeeeeuuuuuuuuuuuuuu')
            },

            error:function (error){
                console.log(error)
                alert('ewwwwwwwww')

            }
        })
    }

)


$('#updatePost').click(function (){
        console.log("clicked UPDATE post");
        let postId = $('#postId').val();
        let postTitle =$('#postTitle').val();;
        let postText =$('#postText').val();;
        let postCategory =$('#postCategory').val();

        console.log(postId, postTitle, postText, postCategory);

        $.ajax({
            url: "http://localhost:8080/blog/updatePost",
            method: "PUT",
            contentType: "application/json",
            "data": JSON.stringify({
                "id": postId,
                "category": postCategory,
                "text": postText,
                "title": postTitle
            }),
            success: function (results) {
                console.log(results)
                alert('Niceeeeeeeeeeuuuuuuuuuuuuuu')
            },

            error: function (error) {
                console.log(error)
                alert('ewwwwwwwww')

            }
        })
        })

$('#deletePost').click(function (){
        console.log("clicked UPDATE post");
        let postId = $('#postId').val();
        /*  let postTitle =$('#postTitle').val();;
          let postText =$('#postText').val();;
          let postCategory =$('#postCategory').val();*/

        console.log(postId);

        $.ajax({
            url:`http://localhost:8080/blog/deletePost/${postId}`,
            method:"DELETE",
           /* contentType:"application/json",
            "data":JSON.stringify({
                "id":postId,
                "category":postCategory,
                "text":postText,
                "title":postTitle
            }),*/
            success:function (results){
                console.log(results)
                alert('Niceeeeeeeeeeuuuuuuuuuuuuuu')
            },

            error:function (error){
                console.log(error)
                alert('ewwwwwwwww')

            }
        })
    }

)



$('#getAll').click(function (){
        console.log("clicked getAll post");
        $.ajax({
            url:"http://localhost:8080/blog/GetAllPost",
            method:"GET",

            success:function (results){
                console.log(results)
                alert('Niceeeeeeeeeeuuuuuuuuuuuuuu')


            // Clear the existing table body
            $('table tbody').empty();

    // Iterate over the results and append rows to the table
    results.forEach(function(post) {
        let row = `
                    <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.text}</td>
                        <td>${post.category}</td>
                    </tr>
                `;
        $('table tbody').append(row);
      })
            },

            error:function (error){
                console.log(error)
                alert('ewwwwwwwww')

            }


        })
    }

)




