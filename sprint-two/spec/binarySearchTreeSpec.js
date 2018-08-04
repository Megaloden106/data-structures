describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", "depthFirstLog", and "removeFromParent"', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
    expect(binarySearchTree.removeFromParent).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });
  
  it('should have a parent', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.right.parent.value).to.eql(5);
    expect(binarySearchTree.left.right.parent.value).to.eql(2);
  });
  
  it('should remove node from parent', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.removeFromParent(6).value).to.eql(6);
    expect(binarySearchTree.contains(6)).to.equal(false);
    expect(binarySearchTree.contains(7)).to.equal(true);
  });
  
  it('should throw an error when inserting a pre-existing node', function() {
    var fn = function() { binarySearchTree.insert(5); };
    expect(fn).to.throw(Error);
  });
  
  it('should rebalance a branch when the method is called', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree = binarySearchTree.rebalance();
    expect(binarySearchTree.value).to.equal(3);
    expect(binarySearchTree.left.value).to.equal(2);
    expect(binarySearchTree.right.value).to.equal(5);
  });
  
  it('should automatically rebalance tree', function() {
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    expect(binarySearchTree.depth).to.equal(3);
    expect(binarySearchTree.left.value).to.equal(3);
    expect(binarySearchTree.left.right.value).to.equal(4);
  });
  
  it('should update depths correctly when inserting values', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    expect(binarySearchTree.left.right.right.depth).to.equal(1);
    expect(binarySearchTree.right.depth).to.equal(2);
    expect(binarySearchTree.left.depth).to.equal(3);
    expect(binarySearchTree.depth).to.equal(4);
  });
  
});
