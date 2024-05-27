package miniproject.miniproject1;

public class Addr {
	private String name;
	private String phoneNumber;
	private String email;
	private String addr;
	private String group;
	private String number;

	public Addr(String phoneNumber, String name, String number, String email, String addr, String group) {
		this.phoneNumber = phoneNumber;
		this.name = name;
		this.number = number;
		this.email = email;
		this.addr = addr;
		this.group = group;
	}

	public Addr(String name, String phoneNumber, String email, String addr, String group) {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.addr = addr;
		this.group = group;
	}

	void printInfo() {

		System.out.println("이름 : " + name);
		System.out.println("전화번호 : " + phoneNumber);
		System.out.println("이메일 : " + email);
		System.out.println("주소 : " + addr);
		System.out.println("그룹 : " + group);
	}
	
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

//	@Override
//	public int hashCode() {		
//		return phoneNumber.hashCode();
//	}
//
//	@Override
//	public boolean equals(Object obj)   {
//			
//		if(obj instanceof Addr) {
//			Addr addr = (Addr)obj;
//			return this.phoneNumber.equals(addr.phoneNumber);		 
//	} else {
//		 return false;
//		 }
//	}
}
