// Javascript
// 請完成 TODO 的部分，執行 Run 完畢得到正確結果後直接關閉視窗即可
// ---------------------------PART1---------------------------
// 輸入一個數字 n，回傳檢查數字 n 是否符合檢查 Happy 規則，若合法回傳 true，反之 false 。
// Happy 規則：數字 n 的每位數分別進行平方且相加，不斷循環這個過程，
// 若最終相加結果為 1，則認定數字 n 符合 Happy 規則。
// 範例：
// Input: n = 44
// Output: true
// Explanation:
// 4^2 + 4^2 = 32
// 3^2 + 2^2 = 13
// 1^2 + 3^2 = 10
// 1^2 + 0^2 = 1

var isHappy = function(n) {
    // TODO write your code
    var narr = Array.from(String(n), Number);
    var sum = 0;
    //console.log(arr,sum);
    while (narr.length >= 1){
      for (let x in narr) {
        sum += narr[x]**2;
        //console.log(sum);
      }
      if (sum == 1){
      narr = [];
      return true;
      }
      else {
        if (sum < 9 && sum != 1){
          narr = [];
          return false;
        }
        else {
          narr = Array.from(String(sum), Number);
          sum = 0;
          //console.log(arr);
        }
      }
    }
};

// ---------------------------PART2---------------------------
// 請依照以下 TreeNode 定義，將給定二元樹 Root 
// 以由上到下，由左到右的方式，將同層級的 Node 放入相同陣列並回傳結果。
// 範例：
// Input: root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// Output: [[3], [9, 20], [15, 7]]

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var levelOrder = function(root) {
    // TODO write your code
    var rarr = [];
    var queue = [];
    var next = [];
    var temp = [];
    var depth = 0;
    //console.log('root:',root);
    queue.push(root);
    //console.log('queue:',queue);
    if (root == null){return [];}

    const BFS = function(node){
      while (queue.length){
        let x = node.shift();
        //console.log('x:',x.val);
        if (x.val != null){
          temp.push(x.val);
          if (x.left != null){next.push(x.left);}
          if (x.right != null){next.push(x.right);}
          //console.log('temp',temp);
        }
        //console.log('queue',queue);
        if (!queue){continue;}
      }
      queue = next;
      //console.log('next:',next);
      next = [];
      rarr[depth] = temp;
      temp = [];
      depth ++;
    }
    
    if (root.left){next.push(root.left);}
    if (root.right){next.push(root.right);}
    temp.push(root.val);
    rarr[depth] = temp;
    temp = [];
    depth ++;
    //console.log('next:',next);
    queue = next;
    next = [];
    while (queue.length){
      BFS(queue);
    }
    return rarr;
};

// DO NOT MODIFY
function main(){
    // PART1
    console.log(isHappy(44))
    console.log(isHappy(758))
    console.log(isHappy(8623))
    console.log(isHappy(58139))
    console.log(isHappy(195764))
    
    // PART2
    console.log(levelOrder())
    console.log(levelOrder(new TreeNode(1)))
    console.log(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))
    console.log(levelOrder(new TreeNode(11, null, new TreeNode(18, new TreeNode(3, new TreeNode(21)), new TreeNode(7, new TreeNode(31), new TreeNode(6))))))
    console.log(levelOrder(new TreeNode(7, new TreeNode(6, new TreeNode(11, new TreeNode(5), new TreeNode(4)), new TreeNode(7, new TreeNode(12), new TreeNode(33))), new TreeNode(16, new TreeNode(3, new TreeNode(28), new TreeNode(41)), new TreeNode(7, new TreeNode(39), new TreeNode(6))))))
}

main()
