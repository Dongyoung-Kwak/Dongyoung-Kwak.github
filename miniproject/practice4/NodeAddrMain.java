package nodeAddr;

public class NodeAddrMain {

	public static void main(String[] args) {
		AddrMethod addr = new AddrMethod();

		addr.InsertList("홍길동", "010-1111-1111", "111@111.111");
		addr.InsertList("홍길서", "010-2222-2222", "222@222.222");
		addr.InsertList("홍길남", "010-3333-3333", "333@333.333");
		addr.printList();
				
		ListNode node = addr.searchList("홍길동");
		if (node != null) {
			addr.deleteList(node.getMember().getName());
		} else {
			System.out.println("검색결과없음");
		}
		addr.printList();
		
		addr.InsertList("홍길동", "010-4444-4444", "444@444.444");
		addr.printList();

	}

}
