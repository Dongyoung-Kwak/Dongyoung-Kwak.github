package nodeAddr;

public class AddrMethod {
	private ListNode head;

	public AddrMethod() {
		head = null;
	}

	public void InsertList(String name, String phone, String email) {
		Member newData = new Member(name, phone, email);
		ListNode newNode = new ListNode(newData);
		if (head == null) {
			this.head = newNode;
		} else {
			ListNode temp = head;
			while (temp.link != null) {
				temp = temp.link;
			}
			temp.link = newNode;
		}
	}

	public void deleteList(String name) {
		ListNode pre;
		ListNode temp;
		ListNode old = searchList(name);
		if(head==null) {
			return;
		}
		if (head.link == null) {
			head = null;
		} else {
			pre = head;
			temp = head.link;
			if (pre == old) {
				head = old.link;

			} else {
				while (temp != old) {
					pre = temp;
					temp = old.link;
				}
				pre.link = old.link;

			}

		}

	}

	public ListNode searchList(String name) {
		ListNode temp = this.head;
		
			while (head != null) {
				if (temp.getMember().getName().equals(name)) {
					return temp;
				} else {
					temp = temp.link;
				}
			}
		
		return temp;
	}

	public void printList() {
		ListNode temp = this.head;

		while (temp != null) {
			System.out.printf("이름 : " + temp.getMember().getName() + ", 전화번호  : " + temp.getMember().getPhone()
					+ ", 이메일 : " + temp.getMember().getEmail());
			temp = temp.link;
			if (temp != null) {
				System.out.println();
			}
		}
		System.out.println();
		System.out.println("================================");
	}
}
