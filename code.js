    // Function to push all the elements into the stack.
    function push(arr, n){
        for(let i=1;i<n;i++){
            arr[i] = Math.min(arr[i], arr[i - 1])
        }
        return arr
     }
     //Function to print minimum value in stack each time while popping.
     function getMinAtPop(s)
     {
        return s.reverse().join(" ")
     }