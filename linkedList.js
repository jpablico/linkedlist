class LinkList {
  constructor(value) {
    this.value = value;
  }

  append(value) {
    let current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = new LinkList(value);
  }

  prepend(value) {
    const newHead = new LinkList(value);
    newHead.next = this;
    return newHead;
  }
}
