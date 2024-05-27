package miniproject.miniproject1;

public class AddrMain {

	public static void main(String[] args) {
		Addr addr1 = new Addr("홍길동", "010-1234-5678", "abc@gmail.com", "서울", "친구");
		addr1.printInfo();

		System.out.println("--------------------\n그룹 정보 변경");
		addr1.setGroup("가족");
		System.out.println("--------------------");

		addr1.printInfo();

	}

}
