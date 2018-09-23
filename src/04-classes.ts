/**
 * Classes in Typescript
 * - Can contain private, protected and public variables.
 * - Can extend other classes and implement interfaces and types.
 * - Public and private constructor variables can be automatically assigned as class properties.
 */

interface IAnimal {
  getNickname(): string;
}

class Animal implements IAnimal {
  private nickname: string;

  constructor(nickname: string) {
    this.nickname = nickname;
  }

  public getNickname() {
    return this.nickname;
  }
}

/* --------------------------------------------------------- */

interface ICatFns {
  getBreed(): string;
  getColor(): string;
}

interface ICatAttrs {
  breed: string;
  color: string;
}

type CatType = ICatFns & ICatAttrs;

class Cat extends Animal implements CatType {
  constructor(nickname: string, public breed: string, public color: string) {
    super(nickname);
  }

  public getBreed() {
    return this.breed;
  }

  public getColor() {
    return this.color;
  }
}
