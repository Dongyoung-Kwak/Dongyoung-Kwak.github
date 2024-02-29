package miniproject.miniproject3;


public class CustomerAddr extends Addr {
	private String accountName, accountItem, position;

	public CustomerAddr(String name, String phoneNumber, String email, String address, String group, String accountName, String accountItem, String position) {
		super(name, phoneNumber, email, address, group);
		this.accountItem=accountItem;
		this.accountName=accountName;
		this.position=position;
	}
	public String getAccountName() {
		return accountName;
	}
	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}
	public String getAccountItem() {
		return accountItem;
	}
	public void setAccountItem(String accountItem) {
		this.accountItem = accountItem;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	
	@Override
	public void printInfo() {
		System.out.println("-------------------");
		System.out.println("이름 : " + getName());
		System.out.println("전화번호 : " + getPhoneNumber());
		System.out.println("이메일 : " + getEmail());
		System.out.println("주소 : " + getAddress());
		System.out.println("그룹 : " + getGroup());
		System.out.println("거래처이름 : "+ accountName);
		System.out.println("거래처품목 : "+ accountItem);
		System.out.println("직급 : "+position);
	}
}
