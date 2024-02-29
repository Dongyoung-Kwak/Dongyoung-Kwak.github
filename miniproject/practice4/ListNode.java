package nodeAddr;

public class ListNode {
	Member member;
	ListNode link;
	
	public ListNode() {
		this.member=null;
		this.link=null;
	}
	
	public ListNode(Member member) {
		this.member=member;
		this.link=null;
	}
	
	public ListNode(Member member, ListNode link) {
		this.member=member;
		this.link=link;
	}
	
	public Member getMember() {
		return member;
	}
	public void setMember(Member member) {
		this.member = member;
	}
	public ListNode getLink() {
		return link;
	}
	public void setLink(ListNode link) {
		this.link = link;
	}
	
	
}
