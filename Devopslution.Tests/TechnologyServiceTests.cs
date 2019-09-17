

using Microsoft.VisualStudio.TestTools.UnitTesting;
using Devopslution.Domain.Services.Technologies;
using System.Collections.Generic;
using System.Linq;
using Moq;
using System;

[TestClass]
public class TechnologyServiceTest
{
    [TestMethod]
    public void TestGetMethodWorks()
    {
        string testClass = nameof(TechnologyService);
        //**Exptected Results
        List<ITechnology> mockItems = new List<ITechnology>()
        {
                new Technology()
                {
                    Id =1,
                    Name =".Net Core",
                    ImageUrl ="NetCoreLogo.svg",
                },
                new Technology()
                {
                    Id =2,
                    Name ="C#",
                    ImageUrl ="CSharpLogo.svg",
                },
        };

        //***Arrange
        Mock<ITechnologyRepository> mock = new Mock<ITechnologyRepository>();
        mock.Setup(repo => repo.GetAll()).Returns(mockItems);


        //***Act
        TechnologyService service = new TechnologyService(mock.Object);
        List<ITechnology> returnedItems = service.GetAll().ToList();

        //***Assert
        Assert.AreEqual(mockItems.Count, returnedItems.Count, $"{testClass} returned {returnedItems.Count} elements when should have returned {mockItems.Count} elements.");

        foreach (ITechnology item in mockItems)
        {
            bool isFound = returnedItems.Where(t => t.Id == item.Id).ToList().Count == 1;
            Assert.IsTrue(isFound, $"{testClass} did not returned the element with {nameof(item.Id)}: {item.Id}");
        }
    }

    [TestMethod]
    public void TestGetMethodThrowsExceptionOnNullDependencies()
    {
        //***Arrange
        TechnologyService service = new TechnologyService(null);
        //***Assert
        Assert.ThrowsException<ArgumentNullException>(() => service.GetAll());
    }
}